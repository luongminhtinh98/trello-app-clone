import "./App.css";
import HeaderComponent from "./components/Header";
import CardList from "./components/CardList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useCallback } from "react";
import { dataSource } from "./mocks/data";

function App() {
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <>
      <HeaderComponent />
      <main>
        <div className="trello-container">
          <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Droppable
              droppableId="CARD_LIST"
              direction="horizontal"
              type="CARD_LIST"
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  // style={{
                  //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  // }}
                  {...provided.droppableProps}
                  className="list-container"
                >
                  {dataSource.columns.map((list, listIndex) => {
                    const cardList = dataSource.lists[list];
                    const cards = cardList.cards;

                    return (
                      <CardList
                        key={cardList.id}
                        draggableId={list}
                        index={listIndex}
                        cardList={cardList}
                        cards={cards}
                      /> 
                    );
                  })}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default App;
