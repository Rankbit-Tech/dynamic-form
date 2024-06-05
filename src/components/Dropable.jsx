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
                {
                    fields.length ?
                        <Flex vertical gap={2}>
                            {
                                fields.map((input, index) => {
                                    return (
                                        <Flex gap={1}>
                                            <Input type={input.type} />
                                            <Input id={index} value={input.label || ''} onChange={onChangeLable} type="text" placeholder='Label' />
                                            <Input id={index} value={input.name || ''} onChange={onChangeName} type="text" placeholder='Name' />

                                        </Flex>
                                    )
                                })
                            }
                        </Flex>
                        : <div className='placeholder'>Drag items here</div>}
            </div>
            <div>
                <Button type='primary' onClick={saveForm}>Save Form</Button>
            </div>
        </Card>
    )
}

export default Dropable