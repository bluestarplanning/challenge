# Blue Star Planning Coding Challenge | React Javascript

### Difficulty: medium/hard

## Pre-requisites ✅
- Run `npm install`. we already pre-installed some potentially useful packages
    - All React related packages
    - Axios (you can use a different library if you want)
    - React-JSS and styled-components

## Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make API calls efficiently
- Testing knowledge of React built in hooks and how to potentially create your own hook
- Prevent unneccessary rerenders

## Requirements 📖
- Fetch and display _Active Jobs_ 
    - Use the API url `https://5f96dad811ab98001603b3f0.mockapi.io/active-jobs`
- Fetch and display _Completed Jobs_ 
    - Use the API url `https://5f96dad811ab98001603b3f0.mockapi.io/completed-jobs`
- You have complete freedom in the UI/UX of the job information
- Refresh one of the lists by the button click
- **Extra:** make your own custom hook for the above functionality

## What's Already Been Done 🏁
- Skeleton UI/UX (`Views/Jobs`).
    - List container for _Active Jobs_
    - List container for _Completed Jobs_
    - Two refresh buttons

## Non-requirements
- You can choose your own way of styling (styled-components, JSS, css, sass, other)
- You can choose your own way of fetching data (Axios, XHR, Fetch, other)

## Data 
- API Response is an array of Jobs: 
<pre>
<code>
interface JobInterface {
    id: string,
    createdAt: string,
    person: string,
    description: string,
    title: string
}
</code>
</pre>