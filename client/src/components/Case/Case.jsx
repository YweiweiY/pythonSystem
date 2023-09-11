import Axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../../env";
import { Avatar, List, Space ,Tag} from "antd";
import userAvater from "../../assets/user.png"

const Case = () => {
  const [cases, setCases] = useState(null);
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
              <div >
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
                      extra={  
                        <img
                          width={272}
                          alt="logo"
                          src={item.image}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={userAvater} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}

                      />
                      {item.content}
                      <Tag>{item.location}</Tag>
                      <span style={{marginLeft:"10px"}}>{item.date}</span>
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
