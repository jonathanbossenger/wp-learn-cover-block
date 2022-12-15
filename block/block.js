( function ( blocks, blockEditor, components, element ) {
    var createElement = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;
    var RichText = blockEditor.RichText;
    var Heading = components.__experimentalHeading;
    var Image = components.Image;

    blocks.registerBlockType( 'wp-learn/cover-block', {
        edit: function ( { attributes, setAttributes } ) {
            var blockProps = useBlockProps();

            function onChangeContent( newContent ) {
                setAttributes( { content: newContent } );
            }

            function onChangeHeading( newHeading ) {
                setAttributes( { heading: newHeading } );
            }

            return createElement(
                'div',
                blockProps,
                createElement(
                    RichText,
                    {
                        tagName: 'h2',
                        style: { color: 'white' },
                        onChange: onChangeHeading,
                        value: attributes.heading,
                    }
                ),
                createElement(
                    RichText,
                    {
                        tagName: 'p',
                        onChange: onChangeContent,
                        value: attributes.content,
                    }
                )
            );
        },
        save: function ( { attributes} ) {
            var blockProps = useBlockProps.save();

            return createElement(
                'div',
                blockProps,
                createElement(
                    RichText.Content,
                    {
                        tagName: 'h2',
                        style: { color: 'white' },
                        value: attributes.heading,
                    }
                ),
                createElement(
                    RichText.Content,
                    {
                        tagName: 'p',
                        value: attributes.content,
                    }
                )
            );
        },
    } );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.components, window.wp.element );