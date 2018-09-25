import React, {Children} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridContainer from '../GridContainer/GridContainer';
import Labeled from '../Labeled/Labeled';

const sanitizeRestProps = ({
    children,
    className,
    record,
    resource,
    basePath,
    version,
    initialValues,
    translate,
    ...rest
}) => rest;

const GridLayout = ({ basePath, className, resource, record, children, version, ...rest }) => (
    <GridContainer {...sanitizeRestProps(rest)} className={className} key={version}>
        {
            Children.map(children, field => {
                return (
                    <div
                        key={field.props.source}
                        className={classnames(
                            `ra-field ra-field-${field.props.source}`,
                            field.props.className
                        )}
                    >
                        {field.props.addLabel ? (
                            <Labeled 
                                record={record}
                                resource={resource}
                                basePath={basePath}
                                label={field.props.label}
                                source={field.props.source}
                                disabled={false}
                            >
                                {field}
                            </Labeled>
                        ) : typeof field.type === 'string' ? (
                            field
                        ) : (
                                React.cloneElement(field, {
                                    record,
                                    resource,
                                    basePath
                                })
                        )}
                    </div>
                );
            })
        }
    </GridContainer>
);

GridLayout.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
};

export default GridLayout;