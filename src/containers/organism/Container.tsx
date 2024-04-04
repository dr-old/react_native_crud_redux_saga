import React, {ReactNode, ReactElement} from 'react';
import {ScrollView, StyleSheet, View, ScrollViewProps} from 'react-native';
import {Divider} from '../../components/atoms';
import {
  BarHeader,
  LoadingExtern,
  NavHeader,
  NavHome,
} from '../../components/molecules';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../utils/styles';

interface ContainerProps {
  refScroll?: React.RefObject<ScrollView>;
  refreshControl?: ReactElement;
  onScroll?: ScrollViewProps['onScroll'];
  bgColor?: string;
  children?: ReactNode;
  navbar?: any;
  bottom?: ReactNode;
  loading?: boolean;
  scrollview?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  refScroll,
  refreshControl,
  onScroll,
  bgColor,
  children,
  navbar,
  bottom,
  loading,
  scrollview = true,
}) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={[color.background1, color.background2, color.background3]}
      style={{flex: 1}}>
      <BarHeader
        bgcolor={bgColor || color.background1}
        barStyle="light-content"
      />
      {navbar?.type === 'fixed' ? (
        <NavHeader
          title={navbar?.title}
          subtitle={navbar?.subtitle}
          value={navbar?.value}
          onChangeText={navbar?.onChangeText}
          onEdit={navbar?.onEdit}
          onSearch={navbar?.onSearch}
          onClick={navbar?.onClick}
          onClear={navbar?.onClear}
        />
      ) : null}
      {scrollview ? (
        <ScrollView
          style={{backgroundColor: bgColor}}
          ref={refScroll}
          onScroll={onScroll}
          refreshControl={refreshControl}>
          {navbar?.type === 'nofixed' ? (
            <NavHeader
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onEdit={navbar?.onEdit}
              onClick={navbar?.onClick}
              onClear={navbar?.onClear}
            />
          ) : null}
          {navbar?.type === 'home' ? (
            <NavHome
              title={navbar?.title}
              imageProfile={navbar?.imageProfile}
              onSearch={navbar?.onSearch}
              onFavorite={navbar?.onFavorite}
              onCart={navbar?.onCart}
            />
          ) : null}
          {children}
          <Divider height={50} />
        </ScrollView>
      ) : (
        <View style={{...stylesCust.page, backgroundColor: bgColor}}>
          {navbar?.type === 'nofixed' ? (
            <NavHeader
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onEdit={navbar?.onEdit}
              onClick={navbar?.onClick}
              onClear={navbar?.onClear}
            />
          ) : null}
          {navbar?.type === 'home' ? (
            <NavHome
              title={navbar?.title}
              imageProfile={navbar?.imageProfile}
              onSearch={navbar?.onSearch}
              onFavorite={navbar?.onFavorite}
              onCart={navbar?.onCart}
            />
          ) : null}
          {children}
          {/* <Divider height={50} /> */}
        </View>
      )}
      {bottom ? bottom : null}
      {loading ? <LoadingExtern backgroundColor={undefined} /> : null}
    </LinearGradient>
  );
};

const stylesCust = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default Container;
