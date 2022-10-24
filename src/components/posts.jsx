import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Droppable, Draggable, } from "react-beautiful-dnd";
import {fetchDataSagaAction} from "../redux/saga/action";
import {
    setSortingToSmall,
    setSortingToBig,
    setSortingTitleToBig,
    setSortingTitleToSmall,
    findTask,
    reorder,
    } from "../redux/toolkitReducer";
import {
    currentPageSelector,
    dataSelector, errorSelector,
    isLoadingSelector, isSortedByTitleSelector,
    isSortedSelector,
    perPageSelector
} from "../redux/saga/selectors";
import SvgSelector from "./svgSelector";

export const Posts = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingSelector);
    const data = useSelector(dataSelector);
    const currentPage = useSelector(currentPageSelector);
    const perPage = useSelector(perPageSelector);
    const isSorted = useSelector(isSortedSelector);
    const isSortedByTitle = useSelector(isSortedByTitleSelector);
    const error = useSelector(errorSelector)

    useEffect(() => {
        dispatch(fetchDataSagaAction(currentPage, perPage))
    }, [currentPage] )

    const onDragEnd = (result) => {
        if (!result.destination) return
        const { destination, source } = result;
        if (destination.droppableId === source.droppableId) {
            dispatch(reorder(result));
        }
    };

    return (
    <div>
        <div className={'main-container'}>
            <DragDropContext onDragEnd={(res) => onDragEnd(res)} >
                <table>
                    <thead>
                    <tr>
                        <th
                            onClick={() => isSorted ? dispatch(setSortingToSmall()) : dispatch(setSortingToBig())}
                            className={'th-id'}
                        >
                            { isSorted ? <SvgSelector id={'arrow-down'}/> : <SvgSelector id={'arrow-up'}/> }
                            id
                        </th>
                        <th
                            onClick={() => isSortedByTitle ? dispatch(setSortingTitleToSmall()) : dispatch(setSortingTitleToBig())}
                        >
                            { isSortedByTitle ? <SvgSelector id={'arrow-up'}/> : <SvgSelector id={'arrow-down'}/> }
                            Title</th>
                        <th>
                            Body
                        </th>
                    </tr>
                    </thead>
                    <Droppable droppableId="droppable-1"
                    >
                        {provider => (
                            <tbody ref={provider.innerRef} {...provider.droppableProps}>
                            {data.map((item,index) => (
                                <Draggable
                                    draggableId={item.id.toString()}
                                    key={item.id}
                                    index={index}
                                >
                                    {provider => (
                                        <tr
                                            key={item.id}
                                            onClick={() => dispatch(findTask(item.id))}
                                            {...provider.draggableProps}
                                            ref={provider.innerRef}
                                            {...provider.dragHandleProps}
                                        >
                                            <td >{item.id}</td>
                                            <td >{item.title}</td>
                                            <td >{item.body}</td>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {provider.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </table>
            </DragDropContext>
        </div>
        { isLoading && <h1 className={'loading'}>LOADING...</h1> }
        { !isLoading && error && <h1 className={'loading'}>{error}</h1> }
    </div>
);
};