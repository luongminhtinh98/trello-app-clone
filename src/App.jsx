

import './App.css'
import { Header } from 'antd/es/layout/layout'
import { Layout, Card, Col, Row, Tooltip, Button, Space } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// assets
import logoTrello from './assets/logo-trello.png'

function App() {

  return (
    <>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1677ff',
            height: '40px'
          }}
        >
          <img src={logoTrello} alt='logo trello' height={80} width={80}></img>
        </Header>
      </Layout>
      <main>
        <Row gutter={16}>
          <Col span={8}>
            <Card 
              title="Card title" 
              bordered={false} 
              extra={
                <Space gutter={2}>
                  <Tooltip title="add">
                    <Button shape="circle" icon={<PlusOutlined />} />
                  </Tooltip>

                  <Tooltip title="delete">
                    <Button shape="circle" icon={<DeleteOutlined />} />
                  </Tooltip>
                </Space>
              }>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </main>
    </>
  )
}

export default App
