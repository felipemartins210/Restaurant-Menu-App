import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    TextInput,
    FlatList
} from 'react-native';
import { withStyleAnimation } from 'react-native-reanimated/lib/types/lib/reanimated2/animation';

import { FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

import { CategoryCard, TrendingCard } from '../components';

const Home = ({ navigation }) => {

    function renderHeader(){ 
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80
                }}
            >
                {/* Text */}
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                ...FONTS.h2
                            }}
                        >Hello Felipe Martins,</Text>

                        <Text
                            style={{
                                marginTop: 3,
                                color: COLORS.gray,
                                ...FONTS.body3
                            }}
                        >
                            What experience will you live today?
                        </Text>
                    </View>

                {/* Image */}
                    <TouchableOpacity
                        onPress={() => console.log('profile')}
                    >
                        <Image 
                            source={images.profile}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20
                            }}
                        />
                    </TouchableOpacity>
            </View>
        )
    }

    function renderSearchBar(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image 
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />

                <TextInput 
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder='Search Your Experience...'
                />
            </View>
        )
    }

    function renderSeeRecipeCard(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen
                }}
            >
                {/* Image */}
                <View
                    style={{
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={images.recipe}
                        style={{
                            width: 80,
                            height: 80,
                        }}
                    />
                </View>

                {/* Text */}
                <View
                    style={{
                        flex: 1,
                        paddingVertical: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            width: '70%',
                            ...FONTS.body4
                        }}
                    >
                        Your have 12 recipes that you haven't tried yet! 
                    </Text>

                    <TouchableOpacity
                        style={{
                            marginTop: 10
                        }}
                        onPress={() => console.log('Confira')}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                textDecorationLine: 'underline',
                                ...FONTS.h4
                            }}
                        >
                            Check now!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTrendingSection(){
        return(
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Trending Experiences!
                </Text>

                <FlatList 
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => {
                        return(
                            <TrendingCard 
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate
                                ('Recipe', { recipe: item})}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    function renderCategoryHeader() {
        return(
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: SIZES.padding
                }}
            >
                {/* Section Title */}
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    Categories
                </Text>

                {/* View All Button */}
                <TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex:1, 
                backgroundColor: COLORS.white
            }}
        >
            <FlatList 
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent= {
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        
                        {/* Search Bar */}
                        {renderSearchBar()}
                        
                        {/* See Recipe Card */}
                        {renderSeeRecipeCard()}

                        {/* Trending Section */}
                        {renderTrendingSection()}

                        {/* CategoryHeader */}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({item}) =>{
                    return(
                        <CategoryCard   
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate
                            ('Recipe', { recipe: item})}

                        />
                    )
                }}
                ListFooterComponent={
                    <View 
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Home;