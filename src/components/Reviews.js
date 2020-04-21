import React from 'react';

import styled from "styled-components";

import Star from "../icons/Star.js";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

const SectionBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 3px solid rgba(38, 106, 216, 1);
    margin: 1rem;
    padding-bottom: 1rem;
`;

const BoxTop = styled.div`
    width: 100%;
    display: inherit;
    justify-content: center;
    background-color: rgba(38, 106, 216, 1);
`;

const BoxBottom = styled.div`
    width: 100%;
    display: inherit;
    flex-direction: column;
`;

const TopText = styled.h2`
    color: rgba(236, 236, 236, 1);
    font-size: 2rem;
    font-weight: 800;
`;

const StarContainer = styled.div`
    width: 100%;
    display: flex;
    margin-left: 2rem;
    padding-top: 1rem;
`;

const StarBox = styled.div`
    background-color: rgba(211, 35, 35, 1);
    margin-right: 1rem;
    padding: 0.3rem;
    border-radius: 0.2rem;
`;

const BottomTextItem = styled.h3`
    color: rgba(46, 49, 49, 1);
    font-weight: 600;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 0rem;
`;

const BottomTextDescription = styled.h4`
    color: rgba(46, 49, 49, 1);
    font-style: italic;
    font-weight: 400;
    margin-left: 2rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
`;

const Reviews = () => {
    return (
        <Container>
            <SectionBox>
                <BoxTop>
                    <TopText>Amazing Greek Food!</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription> I ordered spanakopita and pastitcio for delivery. The spanakopita was a large portion. The béchamel sauce on the pastitcio was delicious. The ordering and delivery was quick. Will definitely be ordering again!</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>I highly recommend :)</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>This was a staple when I lived in Vienna and when I'm back in town I always visit with my family! Our whole family agrees the pizza is FANTASTIC and honestly better than NY pizza, this is the best pizza in the area. If your meal comes with the salad bar it's great quality and you can tell they don't cheap you out with bad ingredients that aren't fresh.</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>I would recommend for anyone.</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>I've gone here since I was a kid. Same great people, and same great taste. I am a fan of the eggs Benedict. I also tried their omelets recently, and it was very satisfying!</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Came here on a whim and will return because of the homey feel and warm welcome.</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>It's like your grandma when on a Greek vacation and feel in love with Greek cuisine, mastered it and opened up a restaurant in your neighborhood!!</BottomTextDescription>
                    <BottomTextDescription>This is it. Any time you need a culinary hug and pampering than come here. Chicken soup cures every, stuffed cabbage is a dream and I'm pretty sure anything and everything else will be divine!!</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>A hidden treasure!</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>Warm, friendly vibes, EXCEPTIONALLY-well executed menu items, huge variety and tremendous value!  My new favorite Greek-run diner.  We very much look forward to many happy returns.</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>Love this place!!</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>Best Gyro I've had in a long, long time, and I have loved Gyros for over 40 years. Wife had chicken parm...cooked to perfection. Spaghetti and marinara sauce were exquisite. Service was very, very friendly. Immediately felt like I was a friend over their house for dinner. Oh, and the cheesecake is to die for--best I've had since my grandmother passed in 1985. My only disappointment is I live an hour away! But I'll still be back!</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>The taramosalata is amazing.</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>It is a rather generous portion, and I basically treat it as a salad.  I will be ordering multiple portions  for takeout when I entertain and supplement it with some wonderful thin toasted baguettes.  It is divine.</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
            <SectionBox>
                <BoxTop>
                    <TopText>This place has the best pizza in the area!</TopText>
                </BoxTop>
                <BoxBottom>
                    <StarContainer>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                        <StarBox><Star /></StarBox>
                    </StarContainer>
                    <BottomTextDescription>It has that New York style crust that is crunchy outside and soft chewy inside. The sauce is a little sweet and cinnamon-y, just the way I like it.Their gyro platter is huge, enough for two people. Their weekly specials are the epitome of  traditional comfort food, e.g., Chicken Piccata, Chicken Marasala, Lasagna, London Broil... We've been going here at least one month for over a decade now.</BottomTextDescription>
                </BoxBottom>
            </SectionBox>
        </Container>
    )
}

export default Reviews;