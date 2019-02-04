depthMap = imread('stanford_depthmap.png');
depthMap = uint8(depthMap);
K = unique(depthMap);

%255, 237, 219 -> 0th image
effImg = 0*((depthMap == K(14)) + (depthMap == K(13)) + (depthMap == K(12)) + + (depthMap == K(11)));

%200 -> 1st image
effImg = effImg + 1*((depthMap == K(9)) + (depthMap == K(10)));

%182 -> 2nd image
effImg = effImg + 2*((depthMap == K(8)));

%164 -> 3rd image
effImg = effImg + 3*((depthMap == K(7)));

%146 -> 4th image
effImg = effImg + 4*((depthMap == K(6)));

%128 -> 5th image
effImg = effImg + 5*((depthMap == K(5)));

%109 -> 6th image
effImg = effImg + 6*((depthMap == K(3)) + (depthMap == K(4)));

%91 -> 7th image
effImg = effImg + 7*((depthMap == K(1)) + (depthMap == K(2)));

imwrite(uint8(effImg),'effDepthMap.png');

