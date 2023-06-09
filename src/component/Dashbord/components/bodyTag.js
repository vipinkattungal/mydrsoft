
import humanbodyfrontal from '../../../image/humanbodyfrontal.jpg'
import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@mui/material';
import { Stage, Layer, Image, Rect, Text } from 'react-konva';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'absolute',
    width: '80%',
    maxWidth: 600,
    backgroundColor: theme.palette.background?.paper || '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ClinicApp = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [attachments, setAttachments] = useState({});
  const [imageObj, setImageObj] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTag(null);
    setOpenModal(false);
  };

  const handleDrop = (acceptedFiles, tagId) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setAttachments((prevState) => ({
        ...prevState,
        [tagId]: file,
      }));
    }
  };

  const handleStageClick = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedTag(null);
      return;
    }
    if (e.target.hasName('tag')) {
      const tag = e.target;
      setSelectedTag({
        id: tag.attrs.id,
        x: tag.attrs.x,
        y: tag.attrs.y,
        width: tag.attrs.width,
        height: tag.attrs.height,
      });
      return;
    }
    setSelectedTag(null);
  };

  const handleDragEnd = (e) => {
    const tagId = e.target.attrs.id;
    const updatedTags = tags.map((tag) => {
      if (tag.id === tagId) {
        return {
          ...tag,
          x: e.target.x(),
          y: e.target.y(),
        };
      }
      return tag;
    });
    setTags(updatedTags);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => handleDrop(acceptedFiles, selectedTag.id),
  });

  useEffect(() => {
    const image = new window.Image();
    image.src = humanbodyfrontal; // Replace with the actual path to your image
    image.onload = () => {
      setImageObj(image);
      setTags([
        { id: 'tag1', x: 100, y: 100, width: 50, height: 50, label: 'Tag 1' },
        { id: 'tag2', x: 200, y: 200, width: 50, height: 50, label: 'Tag 2' },
      ]);
    };
  }, []);

  return (
    <div>
      <Stage
        width={800}
        height={600}
        onClick={handleStageClick}
      >
        <Layer>
          {imageObj && (
            <Image
              image={imageObj}
              width={280}
              height={600}
            />
          )}
          {tags.map((tag) => (
            <React.Fragment key={tag.id}>
              <Rect
                id={tag.id}
                x={tag.x}
                y={tag.y}
                width={tag.width}
                height={tag.height}
                fill="rgba(0, 0, 255, 0.3)"
                name="tag"
                draggable
                onDragEnd={handleDragEnd}
                onClick={() => handleTagClick(tag)}
              />
              <Text
                x={tag.x + 5}
                y={tag.y + 5}
                text={tag.label}
                fontSize={16}
                fill="black"
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={classes.modal}
        aria-labelledby="tag-modal"
        aria-describedby="tag-modal-description"
      >
        <div className={classes.modalContent}>
          {selectedTag && (
            <>
              <h2>{selectedTag.label}</h2>
              {attachments[selectedTag.id] ? (
                <>
                  <p>Attachment:</p>
                  <img
                    src={URL.createObjectURL(attachments[selectedTag.id])}
                    alt="Attachment"
                    width="100%"
                  />
                  <Button
                    onClick={() => {
                      setAttachments((prevState) => {
                        const updatedAttachments = { ...prevState };
                        delete updatedAttachments[selectedTag.id];
                        return updatedAttachments;
                      });
                    }}
                  >
                    Remove Attachment
                  </Button>
                </>
              ) : (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the attachment here...</p>
                  ) : (
                    <p>Drag and drop an attachment or click to browse</p>
                  )}
                </div>
              )}
              <Button onClick={handleCloseModal}>Close</Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ClinicApp;

