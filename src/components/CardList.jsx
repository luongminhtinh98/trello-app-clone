import { Card, Tooltip, Button, Space } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CardItem from "./CardItem";
import { dataSource } from "../mocks/data";

const CardList = ({ cardList, index, cards }) => {
  return (
    <Draggable draggableId={cardList.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="trello-content"
        >
          <Droppable droppableId={cardList.id} type="CARD_ITEM">
            {(provided) => (
              <Card
                style={{ width: 300 }}
                className="card-list"
                title={cardList.title}
                extra={
                  <Space gutter={2}>
                    <Tooltip title="Add a card">
                      <Button shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>

                    <Tooltip title="Delete this list">
                      <Button shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                  </Space>
                }
              >
                <div
                  ref={provided.innerRef}
                  // style={{
                  //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  // }}
                  {...provided.droppableProps}
                  className="trello-list-container"
                >
                  {cards.map((cardId, cardIndex) => {
                    const cardItem = dataSource.cards[cardId];
                    return (
                      <CardItem
                        key={cardItem.id}
                        index={cardIndex}
                        cardItem={cardItem}
                      />
                    );
                  })}
                </div>
                {provided.placeholder}
              </Card>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default CardList;
