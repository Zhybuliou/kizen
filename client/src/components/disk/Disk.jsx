import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file.js';
import FileList from './fileList/FileList.jsx';
import './disk.scss';
import { createDir } from '../../actions/file.js';
import User from '../user/User.jsx';
import Popup from './Popup.jsx';
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';

export default function Disk() {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);
    const [modalActive, setModalActive] = useState(false);
    const [dirName , setDirName] = useState('');
    
    function createDirHandler() {
      dispatch(createDir(currentDir, dirName))
      setDirName('')
      setModalActive(false)
    }

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])

  return (
  <div className='disk'>
    <User />
    <FileList >
    <Button border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "180px"
                  children = "Create Folder"
                  onClick={() => { setModalActive(true); }}
     />
    </FileList>
    <Popup 
        active={modalActive}
        setActive={setModalActive}
    >
      <div className='popup__header'>
        <div className='popup__title'>
          Create new folder!!!
          <Button children={'x'} onClick={() => { setModalActive(false); }}/>
        </div>
      </div>
      <Input type={'text'} placeholder={'name your folder...'} value={dirName} setValue={setDirName} />
      <Button children={'Enter'} onClick={() => { createDirHandler() }}/>
    </Popup>
  </div>
  )
}
