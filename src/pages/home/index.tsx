import React, { useEffect } from 'react';
import { useModel } from '@@/plugin-model/useModel';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
import styles from './index.less';

const Home: React.FC<{}> = () => {
  const { setBreadcrumb, data } = useModel('layout');
  console.log(data);

  useEffect(() => {
    setBreadcrumb({
      isBack: false,
      title: '首页',
    });
  }, []);

  const tableData = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className="pageContent">
      <Table dataSource={tableData} pagination={false}>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map((tag:any) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Home;
