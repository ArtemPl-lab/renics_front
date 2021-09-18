import { Editor as TinyMCE } from '@tinymce/tinymce-react';

export const Editor = props => {
    return(
        <TinyMCE
            tinymceScriptSrc="/scripts/tinymce/tinymce.min.js"
            init={{
                height: 500,
                menubar: false,
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount codesample'
                ],
                toolbar: 'undo redo| codesample | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6;'
            }}
            {...props}
        />
    );
} 