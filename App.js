import React from "react";
import ReactDOM from "react-dom/client";
// import logo from './src/img/logo.jpg';

/*
everything in here is a comment for this application
Building a swiggy clone with react
- Heaader
    - Navbar
    - Logo
    - Search    
- Body
    - Restaurant Container
        - Restaurant Card
            - Image
            - Name
            - Cuisines
            - Rating
- Footer
*/
const restaurants=
[
                  {
                    "info": {
                      "id": "347868",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/992ee8cf-4c7a-4520-a59b-8aef46a47d86_347868.JPG",
                      "locality": "Cunnigham road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "7.1K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-cunnigham-road-central-bangalore-rest347868",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10583",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/5c5effc9-fae6-447d-850a-39f269c93084_10583.JPG",
                      "locality": "Coles Road",
                      "areaName": "Frazer Town",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 03:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "3.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "302699",
                      "name": "Barbeque Nation",
                      "cloudinaryImageId": "qzqeafcmayvxggjgj7rf",
                      "locality": "Ashok Nagar",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Kebabs",
                        "Biryani",
                        "Street Food",
                        "Snacks"
                      ],
                      "avgRating": 3.7,
                      "parentId": "2438",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "6.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/barbeque-nation-ashok-nagar-rest302699",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "18975",
                      "name": "Nandhana Palace",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/2c004550-3e2f-4929-a6b4-7f2599e9e2d9_18975.jpg",
                      "locality": "Rajajinagar",
                      "areaName": "Rajajinagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Andhra",
                        "South Indian",
                        "North Indian"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2120",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "53K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                            "description": "Best in Andhra Food"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                            "description": "Best in Biryani"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                            "description": "Best in Naati Style Biryani"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Andhra Food",
                                  "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Biryani",
                                  "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Naati Style Biryani",
                                  "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹65"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "9.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-rajajinagar-rest18975",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5938",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
                      "locality": "Tasker Town",
                      "areaName": "Shivaji Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "40K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 05:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "9104",
                      "name": "Rolls On Wheels - Shawarma & Wraps",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/27/81fb1934-8aad-42c2-9244-04815feb89fc_9104.JPG",
                      "locality": "Cunnigham road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Rolls & Wraps",
                        "Snacks",
                        "Fast Food",
                        "North Indian"
                      ],
                      "avgRating": 4.5,
                      "parentId": "772601",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "18K+",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                            "description": "Best in Rolls"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Rolls",
                                  "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/rolls-on-wheels-shawarma-and-wraps-cunnigham-road-central-bangalore-rest9104",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "353404",
                      "name": "RNR Biryani - Taste of 1953",
                      "cloudinaryImageId": "titgwthozpmhyzjgdh5u",
                      "locality": "Shivanahalli",
                      "areaName": "Rajajinagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Biryani",
                        "South Indian",
                        "Kebabs"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11620",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "8.6K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                            "description": "Best in Naati Style Biryani"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Naati Style Biryani",
                                  "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-shivanahalli-rajajinagar-rest353404",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "342643",
                      "name": "The Pizza Bakery - Wood Fired Sourdough",
                      "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                      "locality": "Church Street",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Continental"
                      ],
                      "avgRating": 4.6,
                      "parentId": "522292",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "7.3K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                            "description": "Best in Gourmet"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Gourmet",
                                  "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹175 OFF",
                        "subHeader": "ABOVE ₹1099",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "2.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-church-street-central-bangalore-rest342643",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "667962",
                      "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/db53f58f-bbcc-4aab-a16b-8c7c5d0b84a1_667962.jpg",
                      "locality": "Church Street",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "sandwich",
                        "wrap",
                        "Fast Food",
                        "Pastas",
                        "Italian",
                        "Salads",
                        "Healthy Food",
                        "Desserts",
                        "Continental"
                      ],
                      "avgRating": 4.6,
                      "parentId": "21019",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                            "description": "Best in Gourmet"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                            "description": "Best in Subs & Sandwiches"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "EatRight",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Gourmet",
                                  "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Subs & Sandwiches",
                                  "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹175 OFF",
                        "subHeader": "ABOVE ₹899",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-rest667962",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "672074",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/8f9a90a5-4f89-4234-b4ed-a840580dbe52_672074.jpg",
                      "locality": "Ashok Nagar",
                      "areaName": "Sobha Mall",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.6K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                            "description": "Best in Subs & Sandwiches"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "EatRight",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Subs & Sandwiches",
                                  "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-ashok-nagar-sobha-mall-rest672074",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "16073",
                      "name": "California Burrito",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/8e6326d5-8abb-432d-83be-cf6ebb6f09ff_16073.jpg",
                      "locality": "Mantri Mall",
                      "areaName": "Malleshwaram",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Mexican",
                        "American",
                        "Salads",
                        "Continental",
                        "Keto",
                        "Healthy Food",
                        "Beverages",
                        "Snacks",
                        "Desserts",
                        "Fast Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1252",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "18K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                            "description": "Best in EatRight"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "EatRight",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in EatRight",
                                  "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹65"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "1.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/california-burrito-mantri-mall-malleshwaram-rest16073",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "356343",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/33951293-7a8d-44da-93be-5935133098bc_356343.jpg",
                      "locality": "Nehrunagar Main Road",
                      "areaName": "Seshadripuram",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.0K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 03:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹75 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-nehrunagar-main-road-seshadripuram-rest356343",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "426730",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/11/cc6c72aa-a2bf-4200-ad4e-dc42deb59f4e_426730.JPG",
                      "locality": "Vittal Mallya Road",
                      "areaName": "Vittal Mallya Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "1040",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "7.3K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                            "description": "Best in Cakes & Desserts"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Cakes & Desserts",
                                  "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "793"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-vittal-mallya-road-rest426730",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "767216",
                      "name": "Boba Bhai - Bubble Tea & Korean Street Food",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/37f756bb-d9c0-4884-a2e3-0f595afe9b31_767216.jpg",
                      "locality": "Rajajinagar",
                      "areaName": "Rajajinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bubble Tea",
                        "Burger",
                        "Korean",
                        "Beverages",
                        "Fast Food",
                        "Juice and shake"
                      ],
                      "avgRating": 4.3,
                      "parentId": "361235",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 08:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "114"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/boba-bhai-bubble-tea-and-korean-street-food-rajajinagar-rest767216",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "352790",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/295f755a-0efd-45f2-8883-0b725679323a_352790.JPG",
                      "locality": "Bashyam Circle",
                      "areaName": "Rajajinagar",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹33"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-bashyam-circle-rajajinagar-rest352790",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "657646",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "adbdb21826ddaf4174418e993acc70c9",
                      "locality": "GLOBAL MALLS",
                      "areaName": "RAJAJI NAGAR",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "Kebabs",
                        "North Indian",
                        "barbeque"
                      ],
                      "avgRating": 3.9,
                      "parentId": "351013",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "832",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/dum-safar-biryani-global-malls-rajaji-nagar-rest657646",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "29673",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/2dc3b714-f0b8-4a86-8be9-73fb095102fc_29673.jpg",
                      "locality": "St. Marks Road",
                      "areaName": "St. Marks Road",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹60"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-st-marks-road-rest29673",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "43836",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/136c9e23-b373-45d5-9fad-7e4763ebd36b_43836.JPG",
                      "locality": "MG Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "27K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "12811",
                      "name": "A2B - Adyar Ananda Bhavan",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/17a7d607-1ad7-4a41-8c69-50eb8b735e63_12811.JPG",
                      "locality": "Sampige Road",
                      "areaName": "Malleshwaram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "22",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "40K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-25 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                            "description": "Best in South Indian"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                            "description": "Best in Indian Sweets"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in South Indian",
                                  "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Indian Sweets",
                                  "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹29"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-sampige-road-malleshwaram-rest12811",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "218495",
                      "name": "Polar Bear",
                      "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
                      "locality": "Frazer Town",
                      "areaName": "Frazer Town",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "726",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.5K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-26 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Best in Ice Cream"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Ice Cream",
                                  "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.7",
                          "ratingCount": "1.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2e5a2c7c-7918-40f3-923c-370b5855d5e0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/polar-bear-frazer-town-rest218495",
                      "type": "WEBLINK"
                    }
                  }
                ]
const Header = () =>
{
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://res.cloudinary.com/cloudinary-marketing/images/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1750375701/basspro-case_study-image2/basspro-case_study-image2.png?_i=AA" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};

const Footer = () =>
{
    return(
        <div className="footer">
            <ul>
                <li>Careers</li>
                <li>security</li>
                <li>Lisense</li>
                <li>location</li>
            </ul>
        </div>
    )
}

const ResturantCard = (props) =>
{
   const {restaurantsData}=props;
   console.log("resturant data: "+restaurantsData.info.name)
    return (
        <div className="resturant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurantsData.info.cloudinaryImageId}/>
            <h3>Restaurant {restaurantsData.info.name}</h3>
            <h4>{restaurantsData.info.cuisines.join(",")}</h4>
            <h4>Rating {restaurantsData.info.avgRatingString}</h4>
            <h4>Delivery time {restaurantsData.info.sla.deliveryTime}</h4>
            <h4>Cost {restaurantsData.info.costForTwo}</h4>
        </div>
    )
}

const Body = () =>
{
    return(
        <div className="body">
            <div className="search"> Search </div> 
            {/* //Restaurant Card */}
            <div className="resturant-container">
                {/* <h2>{console.log("res data from body: "+ restaurants[0].info.name)}</h2> */}
                {/* <ResturantCard restaurantsData={restaurants[0]}/> */}
                {
                    restaurants.map((restaurant)=>
                    (
                        <ResturantCard key={restaurant.info.id} restaurantsData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => 
{
    return (
        <div className="app">
            <Header />
            <Body/>
            <Footer/>
        </div>
    );
    
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


