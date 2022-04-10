import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/table.custom";
import CustomLayout from "../../../layouts";
import beatDeleteThunk from "../../../state_management/thunks/beat/beat.delete.thunk";
import { HttpStatus } from "../../../state_management/types";
import urls from "../../../utils/routes/page.routes";

const ListBeats = () => {
  const beatState = useSelector((state) => state.beat);
  const dispatch = useDispatch()
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "BPM", dataIndex: "bpm", key: "bpm" },
    { title: "Genre", dataIndex: "genre", key: "genre" , render: (_, beat) => {
      if(beat.genre === 'dancehall'){
        return (<small className="text-sm font-semibold bg-cyan-700 px-2 py-1 text-black rounded-lg capitalize">{beat.genre}</small>)
      }
      else if(beat.genre === 'hip pop'){
        return (<small className="text-sm font-semibold bg-orange-700 px-2 py-1 text-black rounded-lg capitalize">{beat.genre}</small>)
      }
      else{
        return (<small className="text-sm font-semibold bg-yellow-300 px-2 py-1 text-black rounded-lg capitalize">{beat.genre}</small>)
      }
    }},
    
    { title: "Actions", dataIndex: "actions", key: "actions",
      render: (_, beat) => {
        return <Space>
          <Link to={urls.dashboard_beat_update.replace(':ID', beat.key)} className="btn btn-secondary btn-sm inline-block" ><FontAwesomeIcon icon={faPencil} /></Link>
          <Button loading={beatState.sendingState === HttpStatus.PENDING} to={urls.dashboard_beat_update.replace(':ID', beat.key)} className="btn btn-primary btn-sm inline-block" onClick={() => dispatch(beatDeleteThunk(beat.key))} ><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      }
  },
  ];
  return (
    <CustomLayout admin>
      <div className="heading">
        <h4>List All Created Beat</h4>
        <CustomTable
          columns={columns}
          dataSource={beatState.list}
          description="Beats"
        />
      </div>
    </CustomLayout>
  );
};

export default ListBeats;
