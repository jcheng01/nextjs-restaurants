import Link from 'next/link'
import { Fragment } from 'react';
import Heading from '../../components/Heading';
import Col from '../../components/Col';
import Row from '../../components/Row';
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph';
import Showcase from '../../components/Showcase';
import { getAllRestaurantSlugs, getSingleRestaurantBySlug } from "../../lib/api"
import Buttons from '../../components/Buttons';
import Container from '../../components/Container';
import MenuItem from '../../components/MenuItem';

//
export async function getStaticPaths() {
    const restaurantSlugs = await getAllRestaurantSlugs();
    const paths = restaurantSlugs.map((restaurant) => {
        return {
            params: {
                id: restaurant.node.slug
            }
        }
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps({ params }) {
    const { id } = params;
    const restaurantData = await getSingleRestaurantBySlug(id);
    return {
        props: {
            restaurantData
        }, // will be passed to the page component as props
    }
}

const RestaurantPage = ({ restaurantData }) => {
    const { title, excerpt, featuredImage, restaurantsInformation } = restaurantData;
    const { location, contact, hours, menu } = restaurantsInformation
    const {streetAddress, city, state, zipCode} = location
    const { phoneNumber, emailAddress} = contact
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = hours
    return <Layout>
        <Showcase
        backgroundImage={featuredImage ? featuredImage.node.sourceUrl:null}
        halfHeight
        />
        <Container>
            <Row>
                <Col width="9">
                    <Heading level='1' marginBottom="1">{title}</Heading>
                    <Paragraph marginBottom="1">{excerpt}</Paragraph>
                    {menu.menuItems && 
                        <Fragment>
                            <Heading level='2' marginBottom="1" marginTop="1">Menu</Heading>
                            {
                                menu.menuItems.map((menuItemObj) =>{
                                const {menuItem} = menuItemObj;
                                return <MenuItem data={menuItem} />
                        })
                    }
                        </Fragment>
                    }
                </Col>
                <Col width="3">
                    <Buttons label='Order Takeout'/>
                    <Buttons label='Make Reservation'/>
                        {
                            streetAddress && city && state && zipCode &&
                            <Fragment>
                                <Heading level='2' marginBottom='1'>Location</Heading>
                                <Paragraph marginBottom='2'>
                                    {streetAddress}<br/>
                                    {city}, {state} {zipCode}<br/>
                                </Paragraph>
                            </Fragment>
                        }
                    {
                        phoneNumber || emailAddress ?
                        <Fragment>
                            <Heading level='2' marginBottom='1'>Contact</Heading>
                            <Paragraph marginBottom='2'>
                                {phoneNumber &&
                                    <Fragment>
                                        {phoneNumber} <br/>
                                    </Fragment>}
                                {emailAddress && 
                                    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>}
                            </Paragraph>
                        </Fragment>
                    : ""}
                    <Heading level='2' marginBottom="1">Hours</Heading>
                    <Paragraph marginBottom='2'>
                        {
                            monday.openTime ?
                            <Fragment>
                                Monday: {monday.openTime} - {monday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Monday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Tuesday: {tuesday.openTime} - {tuesday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Tuesday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Wednesday: {wednesday.openTime} - {wednesday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Wednesday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Thursday: {thursday.openTime} - {thursday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Thursday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Friday: {friday.openTime} - {friday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Friday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Saturday: {saturday.openTime} - {saturday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Saturday: Closed<br/></Fragment>}
                        {
                            monday.openTime ?
                            <Fragment>
                                Sunday: {sunday.openTime} - {sunday.closeTime}<br />
                            </Fragment>
                        : <Fragment>Sunday: Closed<br/></Fragment>}
                    </Paragraph>
                </Col>
            </Row>
        </Container>

    </Layout>
}
export default RestaurantPage