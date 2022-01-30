import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file.js';
import FileList from './fileList/FileList.jsx';
import './disk.scss';
import { createDir } from '../../actions/file.js';
import User from '../user/User.jsx';
import Popup from './Popup.jsx';
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';
import { setCurrentDir } from '../../reducers/fileReducer.js';

export default function Disk() {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);
    const dirStack = useSelector(state => state.files.dirStack);
    const [modalActive, setModalActive] = useState(false);
    const [dirName , setDirName] = useState('');
    
    function createDirHandler() {
      dispatch(createDir(currentDir, dirName)) 
      setDirName('')
      setModalActive(false)
    }

    function backClickHandler() {
      const backDirId = dirStack.pop()
      dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event){
      const files = [...event.target.files]
      files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])

  return (
  <div className='disk'>
    <User />
    <FileList >
    {currentDir && <Button 
                  styleBtn='btn-prev'
                  border="none"
                  color="#CCCCCC"
                  height = "47px"
                  radius = "25px"
                  width = "100px"
                  children = "Prev"
                  onClick={() => {backClickHandler()}}
     /> }
    <Button 
                  border="none"
                  color="#CCCCCC"
                  height = "47px"
                  radius = "25px"
                  width = "180px"
                  children = "Create Folder"
                  onClick={() => { setModalActive(true); }}
     />
     <div className='disk__upload'>
        <label htmlFor='disk__upload-input' className='disk__upload-label'>Upload file</label>
        <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>

     </div>
    </FileList>
    <Popup 
        active={modalActive}
        setActive={setModalActive}
    >
      <div className='popup__header'>
        <div className='popup__title'>
          <h2>Create new folder!!!</h2>
          <Button 
            top={'5px'}
            right={'5px'}
            position={'absolute'}
            border={'none'}
            children={'x'} 
            color="#CCCCCC" 
            onClick={() => { setModalActive(false); }}
            height = "30px"
            radius = "50%"
            width = "30px"
          />
        </div>
      </div>
      <Input type={'text'} placeholder={'name your folder...'} value={dirName} setValue={setDirName} />
      <Button 
        border={'none'}
        children={'Enter'} 
        color="#CCCCCC" 
        onClick={() => { createDirHandler() }}
        height = "47px"
        radius = "25px"
        width = "100px"
      />
    </Popup>
  </div>
  )
}
