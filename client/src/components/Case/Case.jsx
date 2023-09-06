import Axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../../env";
import { Avatar, List, Space } from "antd";
// import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

const Case = () => {
  const [cases, setCases] = useState(null);
  console.log(cases);
  useEffect(() => {
    const getData = () => {
      Axios({
        method: "get",
        url: `${domain}/api/lawCase/`,
      }).then((res) => {
        setCases(res.data);
      });
    };
    getData();
  }, []);

  const nextPage = async () => {
    Axios({
      method: "get",
      url: cases?.next,
    }).then((res) => {
      setCases(res.data);
    });
  };

  const previousPage = async () => {
    Axios({
      method: "get",
      url: cases?.previous,
    }).then((res) => {
      setCases(res.data);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
            {cases !== null ? (
              <div className={" flex align-middle"}>
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                  dataSource={cases?.results}
                  footer={<div>footer part</div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      //   actions={[
                      //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                      //   ]}
                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src={item.image}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <>
                <h1>Loading...</h1>
              </>
            )}
          </div>
    </div>
  );
};

export default Case;
