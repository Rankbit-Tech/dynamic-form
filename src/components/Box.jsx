import React from 'react'
import { useDrag } from 'react-dnd'
import { useCustomForm } from '../context/CustomFormContext'

const Box = ({ name, content, config }) => {

    const { addInputIntoList } = useCustomForm()

    const [{ opacity }, drag] = useDrag(
        () => ({
            type: "box",
            item: { name },
            end(item, monitor) {
                const dropResult = monitor.getDropResult()
                if (item && dropResult) {
                    delete config.content
                    addInputIntoList(config)
                }
            },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [name],
    )
    return (
        <div className='item' ref={drag} style={{ opacity }} >
            {content}
        </div>
    )
}

export default Box