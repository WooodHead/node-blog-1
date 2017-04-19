import React, { Component } from 'react';
import { Table, Popconfirm } from 'antd';
import { parseTime } from '../libs/parse-time';
const { Column } = Table;

class GuestbookListItem extends Component {
    render() {
        const { dataSource, pagination, rowSelection, loading, onChange, replyGuestbook, deleteGuestbook } = this.props;
        return (
            <Table
                dataSource={dataSource}
                rowKey={(record) => (record._id)}
                pagination={pagination}
                rowSelection={rowSelection}
                onChange={onChange}
                loading={loading}
            >
                <Column
                    title='昵称'
                    dataIndex='nick_name'
                />
                <Column
                    title='创建时间'
                    dataIndex='create_at'
                    render={(text, record) => (parseTime(text))}
                />
                <Column
                    title='内容'
                    dataIndex='content'
                    width={250}
                />
                <Column
                    title='邮箱'
                    dataIndex='email'
                />
                <Column
                    title='管理员回复的内容'
                    dataIndex='reply_content'
                    width={250}
                />
                <Column
                    title='操作'
                    key='action'
                    width={76}
                    render={(text, record, index) => (
                        <span>
                            <a href="#" onClick={() => { replyGuestbook(record) }}><i className="fa fa-reply fa-fw"></i>回复</a>
                            <br />
                            <Popconfirm title="确定要删除？" onConfirm={() => deleteGuestbook(record._id)} onCancel={() => { }} okText="Yes" cancelText="No">
                                <a href="#"><i className="fa fa-trash-o fa-fw"></i>删除</a>
                            </Popconfirm>
                        </span>
                    )}
                />
            </Table>
        )
    }
}

export default GuestbookListItem