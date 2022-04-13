import React, { useMemo } from "react";
import { List, Skeleton } from "antd";

import useMediaQuery from "../utils/hooks/useSize";


const CustomPlayList2 = ({loading, pageSize, dataSource, MyItem}) => {
  const media = useMediaQuery();

  const configSize = useMemo(() => {
    return media.screen === "sm" ? 2 : 4;
  }, [media.screen]);
  return (
    <List
      // loading={true}
      className="recommended-playlist custom-list"
      grid={{ gutter: 0, column: configSize }}
      dataSource={dataSource}
      pagination={{
        pageSize: pageSize || configSize,
        onChange: (page) => console.log(page),
      }}
      renderItem={(data, index) => (
        <Skeleton loading={loading} active>
          <MyItem key={index} id={data?.key} cover={data.assets?.cover} title={data?.name} bpm={data?.bpm} beat={data.assets?.beat} />
        </Skeleton>
      )}></List>
  );
};


export default CustomPlayList2;
