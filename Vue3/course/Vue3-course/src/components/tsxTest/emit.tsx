
interface Props {
    name?: string
}

const renderDom = (props: Props, content?: any) => {
    return (
        <>
            <div>{props.name}</div>
            {/* <button onClick={clickTap.bind(this, content)}>点击</button> */}
        </>
    )
}

const clickTap = (ctx: any) => {

    ctx.emit('on-click', 1)
}

export default renderDom