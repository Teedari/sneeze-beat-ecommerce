import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";


// const useTableColumns = () => {
//   return () => useMemo(() => {
//     const keys = Object.keys(dataSource[0]);
//     if(dataSource.length > 1){

//       return keys.map((_key, index) => ({
//         title: _key.toUpperCase(),
//         dataIndex: _key,
//         key: _key,
//       }));
//     }
//     return null
//   }, [dataSource]);
// }

const CustomTable = ({description, ...props}) => {


  return (
    <>
    <div className="heading heading-secondary one-color inline-block rounded-full">
      {description && <h4 className="capitalize">
       {description}
      </h4>}
    </div>
    {

      <Table
        pagination={{pageSize: 10}}
        className="custom-table"
        {...props}
      />
    }
    </>
  );
};


CustomTable.propType = {
  dataSource: PropTypes.array,
  columns: PropTypes.array
}


export default CustomTable;
