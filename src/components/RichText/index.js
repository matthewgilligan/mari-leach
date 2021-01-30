import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './styles.scss';

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="heading">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="heading">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="heading">{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="heading">{children}</h4>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <div className="divider">
                <h5>{children}</h5>
            </div>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="paragraph">{children}</p>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <div>
                <img src={`https:${node.data.target.fields.file["en-US"].url}`} alt=""/>
                <p className="caption">{node.data.target.fields.description["en-US"]}</p>
            </div>
        ),
        [INLINES.HYPERLINK]: (node) => (
            <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{node.content[0].value}</a>
        )
    },
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
};

const RichTextRenderer = props => {
    const { json } = props;
    
    return (
        <div className="content">
            {documentToReactComponents(json, options)}
        </div>
    )
};

export default RichTextRenderer;
