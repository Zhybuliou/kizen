import React from 'react';
import { useSelector } from 'react-redux';
import File from './file/File';
import './fileList.scss';

export default function FileList({children}) {
  const files = useSelector(state => state.files.files).map((file, i) => <File key={file.name} color={i%2 ? 'row-white' : 'row-green'} file={file} />);

  return(
    <div className='files-wrapper'>
    <div className='files-btn'>
    {children}
    </div>
    {files}
    </div>
  )
}
