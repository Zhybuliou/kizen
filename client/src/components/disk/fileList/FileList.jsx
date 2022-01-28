import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../button/Button';
import File from './file/File';
import './fileList.scss';

export default function FileList({children}) {
  const files = useSelector(state => state.files.files).map(file => <File key={file.name} file={file} />);

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
    {children}
    </div>
    {files}
    </div>
  )
}
