
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const modal = () => {
    const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
    <div>modal</div>
    {open && (
        <p>The modal is open</p>
    )}
    </div>
  )
}

export default modal