import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const MyDropdown: React.FC = () => {
  const [selected, setSelected] = useState("Dubai");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedItem = items.find((item) => item?.key === e.key);
    if (selectedItem) {
      //@ts-ignore
      setSelected(selectedItem.label as string);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Abu Dhabi",
    },
    {
      key: "2",
      label: "Ajman",
      icon: <SmileOutlined />,
    },
    {
      key: "3",
      label: "Sharjah",
    },
    {
      key: "4",
      danger: true,
      label: "Fujairah",
    },
  ];

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="py-2 px-4 flex justify-between border rounded-md w-11/12 md:w-[275px]">
          {selected}
          <IoMdArrowDropdownCircle style={{ color: "#FBAD17" }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyDropdown;
