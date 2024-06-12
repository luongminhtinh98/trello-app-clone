import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Draggable } from "react-beautiful-dnd";

const CardItem = ({ cardItem, index }) => {
  return (
    
    <Draggable draggableId={cardItem.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="trello-card-child"
        >
          <Card
            className="trello-card-item"
            cover={
              <img
                alt={cardItem.description}
                src={cardItem.image}
                height={160}
                width="100%"
              />
            }
          >
            <Meta title={cardItem.title} description={cardItem.description} />
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
