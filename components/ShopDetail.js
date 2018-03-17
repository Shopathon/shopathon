import React from 'react';
import { Text, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Card from './Card';

const ShopDetail = ({ list }) => {
    const { name, isBought, _id } = list;
    return (
        <Card>
            <CheckBox
                style={styles.headerTextStyle}
                title={name}/>
        </Card>
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 18
    }
};

export default ShopDetail;