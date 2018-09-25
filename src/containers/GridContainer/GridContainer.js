import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    grid: {
        width: '100%'
    }
};

const GridContainer = ({
    children,
    alignItems,
    alignContent,
    classes,
    container,
    direction,
    item,
    justify,
    lg,
    md, sm, xs, xl,
    spacing,
    wrap,
    zeroMinWidth,
    className
}) => (
        <Grid
            alignItems={alignItems}
            alignContent={alignContent}
            container={container}
            direction={direction}
            item={item}
            justify={justify}
            lg={lg}
            md={md}
            sm={sm}
            xs={xs}
            xl={xl}
            spacing={spacing}
            wrap={wrap}
            zeroMinWidth={zeroMinWidth}
            className={className}
            classnames={classnames(classes.root, className)}
        >
            {children}
        </Grid>
    );

GridContainer.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.node
}

export default withStyles(styles)(GridContainer);