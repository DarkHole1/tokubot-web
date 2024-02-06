import { useMainButton } from '@tma.js/sdk-react'
import { useEffect } from 'react'

export function Haruno({ onClick }: { onClick: (s: string) => void }) {
    const mb = useMainButton()

    useEffect(() => {
        const removeMainButtonClick = mb.on('click', () => {
            onClick('')
            mb.disable().hide()
        })

        return () => {
            removeMainButtonClick()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        mb.enable().show().setText('Сохранить изменения')
    }, [])

    return (
        <div>Hello</div>
    )
}