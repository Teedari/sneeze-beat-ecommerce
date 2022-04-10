import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { useSelector, useDispatch } from "react-redux";
import { faCartShopping, faMusic, faPlane, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { turnOnPlayer } from "../state_management/slices/ui.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Button, Empty, Modal } from "antd";
import { removeItemFromCart } from "../state_management/slices/cart.slice";
import { useNavigate } from "react-router-dom";
import urls from "../utils/routes/page.routes";

const FloatActionButton = ({ onClick, iconName }) => {
  return (
    <div
      onClick={onClick}
      className="w-12 h-12 bg-primary center rounded-full   cursor-pointer z-50 active:animate-bounce">
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
};

const FloatActionButtons = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.ui);
  const cartState = useSelector((state) => state.cart);

  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(cartState)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title={null}
        className="custom-modal"
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}>
        {cartState.count === 0 ? (
          <Empty
            description={
              <>
                <p>Cart is empty</p>
                <small className="text-primary text-xs ">This is appearing because card is empty</small>
                
              </>
            }
          />
        ): (
          <div className="pt-4">
            <h3 className="text-primary py-3"><FontAwesomeIcon icon={faCartShopping} /> Cart Item(s)</h3>
            <ul className="flex flex-col gap-3">
              {
                cartState.items.map((item, index) => (
                  <li key={index.toString()} className="tile-cart ">
                  <Avatar size={'large'} src={item?.album?.cover} />
                  <div className="flex-auto">
                    <h4 className="text-slate-400 truncate w-72">{item?.title}</h4>
                    <small className="text-sm text-white">Exclusive</small>
                  </div>
                  <span className="divide-y divide-dashed"></span>
                  <h5 className="text-primary">$12</h5>
                  <button className='tile-cart-absolute' onClick={() => dispatch(removeItemFromCart({id: item?.id}))}>
                    <FontAwesomeIcon size="md" icon={faTrashCan} />
                  </button>
                </li>
                ))
              }
            </ul>
            <Button className='btn btn-primary float-right clear-right' onClick={() => navigate(urls.checkout)}>checkout <FontAwesomeIcon className="pl-2" icon={faPlane} /></Button>
            <div className="clear-right"></div>
          </div>
        )}
      </Modal>
      <section className="fixed bottom-0 right-0 mr-32 mb-20 flex flex-col gap-4 z-30">
        <Badge count={cartState.count}>
          <FloatActionButton iconName={faCartShopping} onClick={showModal} />
        </Badge>
        {uiState.player.isOn ? (
          <MusicPlayer />
        ) : (
          <FloatActionButton
            iconName={faMusic}
            onClick={() => dispatch(turnOnPlayer())}
          />
        )}
      </section>
    </>
  );
};

export default FloatActionButtons;
