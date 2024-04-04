import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ButtonIcon from '../../components/atoms/ButtonIcon';
import Divider from '../../components/atoms/Divider';
import {color, styles as utilsStyles} from '../../utils/styles';

interface SettingItem {
  icon: string;
  label: string;
  subtitle?: string;
  onClick?: () => void;
}

interface SettingListProps {
  data: SettingItem[];
  title: string;
}

const SettingList: React.FC<SettingListProps> = ({data, title}) => {
  return (
    <View style={stylesCust.userActions}>
      <Text style={utilsStyles.textBase(17, color.white, 'textSemiBold')}>
        {title}
      </Text>
      <Divider height={20} />
      {data.map(l => (
        <View key={l.icon} style={stylesCust.userAction}>
          <ButtonIcon
            type={{
              backgroundColor: color.background1,
              borderColor: color.background1,
              color: color.white,
            }}
            name={l.icon}
            size={20}
            onClick={() => console.log('primary')}
          />
          {!l.subtitle ? null : (
            <View style={stylesCust.userButton}>
              <Text style={utilsStyles.textBase(13, color.white)}>
                {l.label}
              </Text>
              <Text style={utilsStyles.textBase(13, color.white)}>
                {l.subtitle}
              </Text>
            </View>
          )}
          {!l.onClick ? null : (
            <TouchableOpacity onPress={l.onClick} style={stylesCust.userButton}>
              <Text style={utilsStyles.textBase(13, color.white)}>
                {l.label}
              </Text>
              <Feather name="chevron-right" size={20} color={color.white} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const stylesCust = StyleSheet.create({
  userActions: {marginBottom: 30, flex: 1},
  userAction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: color.background1,
    borderBottomWidth: 1,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userButton: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SettingList;
