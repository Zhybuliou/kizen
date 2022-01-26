import React from 'react';
import { useSelector } from 'react-redux';
import { createDir } from '../../../actions/file';
import { useDispatch } from 'react-redux';
import Button from '../../button/Button';
import File from './file/File';
import './fileList.scss';

export default function FileList() {
  const files = useSelector(state => state.files.files).map(file => <File key={file.name} file={file} />);
  const currentDir = useSelector(state => state.files.currentDir);
  const dispatch = useDispatch();
  
  function createDirHandler() {
    dispatch(createDir(currentDir, 'my new folder!!!'))
  }

  return(
    <div className='files-wrapper'>
    <div className='files-btn'>
    <Button border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "100px"
                  children = "prev"
     />
        <Button border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "180px"
                  children = "Create Folder"
                  onClick={() => createDirHandler()}
     />
    </div>
    {files}
    </div>
  )
}
