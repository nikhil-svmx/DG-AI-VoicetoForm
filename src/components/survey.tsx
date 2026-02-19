import * as Survey from 'survey-react-ui';

export interface ISurveyProps {
    json: any;
    data: any;
}

const SurveyComponent: React.FunctionComponent<ISurveyProps> = props => {
    const { data, json} = props;

    return (
        <Survey.Survey
            data={data}
            json={json}
        />
    );
}

export default SurveyComponent;