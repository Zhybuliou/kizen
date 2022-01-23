import React from 'react';
import { useSelector } from 'react-redux';
import File from './file/File';
import './fileList.scss';

export default function FileList() {
  const files = useSelector(state => state.files.files).map(file => <File key={file.name} file={file} />);

  return(
    <div>
    {files}
    </div>
  )
}
