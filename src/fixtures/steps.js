const steps= [
    {
        symbol: 'Se', scenario: 'Embed to React', sequence: 1,
        text: `Customize the embed code within target platform to suit
        your site or app styles and placement.`
    },
    {
        symbol: 'Se', scenario: 'Embed to React', sequence: 2,
        text: `Optionally, parametrize the embed code attributes using React props.`
    },
    {
        symbol: 'Se', scenario: 'Embed to React', sequence: 3,
        text: `Use stateless component as you will most likely not maintain embed UI state
        locally in your component.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 1,
        text: `Identify root level component name that represents your sample.
        Define component.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 2,
        text: `Split sample code HTML, CSS, JavaScript into separate files.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 3,
        text: `Copy HTML DOM that renders the sample UI, into render() method
        of root component.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 4,
        text: `Optionally, replace some of the HTML with existing reusable
        components in your app.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 5,
        text: `Copy CSS into new or existing partial.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 6,
        text: `Copy JS to /app/public/js folder.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 7,
        text: `JS over CDN is referred in <script> tag from /app/templates/*.html.`
    },
    {
        symbol: 'Ss', scenario: 'Sample to React', sequence: 8,
        text: `Import the new component into your index.jsx and
        render in render() method.`
    },
];

export default steps;