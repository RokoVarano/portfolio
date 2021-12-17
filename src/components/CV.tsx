import {
  StyleSheet, Document, Page, View, Text,
} from '@react-pdf/renderer';
import React, { FC } from 'react';

const attributes = {
  pSize: '8',
  h1Size: '32',
  h2Size: '24',
  h3Size: '16',
  h4Size: '12',
  hColor: '#BD5620',
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: '1cm',
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'pink',
    marginBottom: '1cm',
  },
  title: {
    fontSize: attributes.h2Size,
  },
  subtitle: {
    color: attributes.hColor,
    fontSize: attributes.h1Size,
    marginBottom: '0.5cm',
  },
  contacts: {
    fontSize: attributes.h4Size,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: attributes.h3Size,
    borderTop: '1px',
    borderBottom: '1px',
    borderColor: 'red',
    marginBottom: '0.5cm',
  },
  sectionBody: {
    fontSize: attributes.h4Size,
    marginBottom: '0.5cm',
  },
  sectionItem: {
    fontSize: attributes.h4Size,
  },
});

const CV:FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Rodrigo Ibaceta</Text>
        <Text style={styles.subtitle}>Junior Full-Stack Web Developer</Text>
        <Text style={styles.contacts}>
          rodrigo.ibaceta01@gmail.com |
          +56973445869 |
          Github: /RokoVarano |
          Linkedin: /in/rodrigo-ibaceta
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>
          Summary
        </Text>
        <Text style={styles.sectionBody}>
          Enhusiastic developer with 2 years of experience and a year of learning in the
          Microverse Bootcamp.
          Fluid use of React and Ruby on Rails to create web sites.
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>
          Skills
        </Text>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionItem}>Front-End: React, Redux, Jest, HTML5, CSS3, SASS</Text>
          <Text style={styles.sectionItem}>
            Back-End: Ruby on Rails, Rspec, Capybara, SQL, Postgres
          </Text>
          <Text style={styles.sectionItem}>Version Control: Git, Github</Text>
          <Text style={styles.sectionItem}>Languages: Spanish(Native), English</Text>
        </View>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>
            Experience
          </Text>
          <Text style={styles.sectionItem}>JUNIOR SOFTWARE DEVELOPER</Text>
          <Text style={styles.sectionItem}>Exe.cl, September 2018, September 2020</Text>
        </View>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>
            Education
          </Text>
          <Text style={styles.sectionItem}>MICROVERSE SOFTWARE DEVELOPMENT BOOTCAMP</Text>
          <Text style={styles.sectionItem}>November 2020, November 2021</Text>
          <Text style={styles.sectionItem}>
            - Remote bootcamp for software development using React,
            Ruby on Rails, and other technologies
          </Text>
          <Text style={styles.sectionItem}>
            - More than 1300 hours developing projects in pairs and
            alone from countires all over the world, with weekly deadlines
          </Text>
        </View>
        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>
            Aditional Skills and Experience
          </Text>
          <Text style={styles.sectionItem}>ENGLISH PROFICIENCY</Text>
          <Text style={styles.sectionBody}>
            Written and spoken English from school,
            A year spent on a Working Holiday in New Zealand.
            IELTS Certification on 2017 and 2019

          </Text>
          <Text style={styles.sectionItem}>
            VETERINARIAN
          </Text>
          <Text style={styles.sectionItem}>
            Degree from Universidad Mayor, Chile, 2016.
            Masters in Environment and Sustainable Development.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CV;
