import { faCartShopping, faPlay, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Input, List, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubNav from "../../../components/SubNav";
import Tile from "../../../components/Tile";
import CustomLayout from "../../../layouts";
import { removeItemFromCart } from "../../../state_management/slices/cart.slice";
import { playMusic, setCurrentTrack } from "../../../state_management/slices/ui.slice";

const Checkout = () => {
  const checkout = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const playMusicHandler = (music, title, cover) => {
    dispatch(playMusic())
    dispatch(setCurrentTrack({title, music, cover}))
  }

  return (
    <CustomLayout hideFooter={true}>
      <div className="container mt-">
        <SubNav title='Checkout' />
        <div className="heading">
          <h3 className="text-slate-400">
            <span>Beat</span> cart
          </h3>
          <div>
            <p>You have {checkout.count} item(s) in your <FontAwesomeIcon className={ checkout?.count <=0 ? "text-slate-600 animate-pulse" : "text-primary"} icon={faCartShopping} /></p>
          </div>
        </div>
        <Row gutter={[14]} className="py-8">
          <Col lg={14} md={24}>
            <List
              // pagination={{pageSize: 3, total: checkout.items.length}}
              dataSource={checkout.items}
              renderItem={(item) => (
                <div className="mb-4">
                  <Tile
                    img={item?.assets?.cover}
                    middleText={item?.name}
                    middleBottomText={item.label}
                    endText={"$".concat(item.price)}>
                    <div className="h-full flex items-center">
                      <button onClick={() => playMusicHandler(item?.assets?.beat, item?.name, item?.assets?.cover)} className="bg-primary h-full w-1/2 text-white">
                        Play <FontAwesomeIcon size="md" icon={faPlay} />
                      </button>
                      <button onClick={() => dispatch(removeItemFromCart({id: item.id}))} className="bg-red-800 h-full w-1/2 text-white ">
                        Delete <FontAwesomeIcon size="md" icon={faTrashCan} />
                      </button>
                    </div>
                  </Tile>
                </div>
              )}></List>
          </Col>
          <Col lg={10} md={24}>
            <div className="bg-dark-300 px-4 py-5 rounded-lg">
              <Form className="form" layout="vertical">
                <Form.Item label='Name on Card'>
                  <Input placeholder="Eg john doe" />
                </Form.Item>
                <Form.Item label='Card Number'>
                  <Input placeholder="1111 2222 3333 4444" />
                </Form.Item>
                <Row gutter={[14, 0]}>
                  <Col md={12}>
                    <Form.Item label='Expiration Date'>
                      <Input type='date' placeholder="Eg john doe" />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label='CVV'>
                      <Input type='number' placeholder="123" />
                    </Form.Item>
                  </Col>
                </Row>
                <hr className="border border-slate-800"/>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </CustomLayout>
  );
};

export default Checkout;
