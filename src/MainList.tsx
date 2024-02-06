export function MainList({ onClick }: { onClick: (current: string) => void}) {
    return (
        <div className='mainlist'>
            <button onClick={_ => onClick('haruno')}>Некий список слов</button>
        </div>
    )
}