import React, { useEffect } from "react";
import CustomLayout from "../../layouts";
import DashboardCard from "../../components/DashboardCard";
import {
  faHeadphones,
  faMessage,
  faMusic,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CustomTable from "../../components/table.custom";
import { useDispatch, useSelector } from "react-redux";
import genreListAllThunk from "../../state_management/thunks/genre/genre.list.thunk";
import { message } from "antd";
import beatFetchThunk from "../../state_management/thunks/beat/beat.fetch.thunk";
import messageFetchThunk from "../../state_management/thunks/message/message.fetch.thunk";
import authFetchUsersThunk from "../../state_management/thunks/auth/auth.fetch_users.thunk";
const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dispatch = useDispatch();
  const beatCount = useSelector( state => state.beat?.count)
  const genreCount = useSelector( state => state.genre?.count)
  const messageCount = useSelector( state => state.message?.count)
  const usersCount = useSelector( state => state.auth?.users?.count)

  useEffect(() => {
    dispatch(beatFetchThunk())
    dispatch(genreListAllThunk())
    dispatch(messageFetchThunk())
    dispatch(authFetchUsersThunk())
  }, [dispatch]);

  return (
    <CustomLayout admin>
      <main className="container main">
        <div className="heading">
          <h2>
            Welcome <span>John Doe</span>
          </h2>
        </div>
        <section className="grid md:grid-cols-4 gap-4">
          <DashboardCard title="Users" value={usersCount} icon={faUsers} />
          <DashboardCard title="Beats" value={beatCount} icon={faHeadphones} />
          <DashboardCard title="Message" value={messageCount} icon={faMessage} />
          <DashboardCard title="Genre" value={genreCount} icon={faMusic} />
        </section>
        <CustomTable
          description="Activities"
          dataSource={dataSource}
          columns={columns}
        />
      </main>
    </CustomLayout>
  );
};

export default Dashboard;
