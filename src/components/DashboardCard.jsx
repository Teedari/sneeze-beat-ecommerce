import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import React from "react";
import CustomizedCardWrapper from "./CustomizedCardWrapper";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <CustomizedCardWrapper>
      <div>
        <span>
          <Avatar
            shape="square"
            size="large"
            className="rounded-lg bg-dark-300 mr-2"
            icon={<FontAwesomeIcon icon={icon} />}
          />{" "}
          {title}
        </span>
        <h4 className="pt-4"> {value}</h4>
      </div>
      <button className="text-left">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </CustomizedCardWrapper>
  );
};

export default DashboardCard;
