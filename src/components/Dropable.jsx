import { Button, Card, Flex, Input } from 'antd'
import React from 'react'
import { useDrop } from 'react-dnd'
import { useCustomForm } from '../context/CustomFormContext'

const Dropable = ({ allowedDropEffect }) => {

    const { fields, onChangeLable, saveForm, onChangeName } = useCustomForm()

    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: "box",
            drop: () => ({
                name: `${allowedDropEffect} Dustbin`,
                allowedDropEffect,
            }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [allowedDropEffect],
    )
    return (
        <Card className='card'>
            <div className={`dropable-area`} ref={drop}>
                <div className='placeholder'>Drag items here</div>
            </div>
        </Card>
    )
}

export default Dropable