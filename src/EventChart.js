import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

 class EventChart extends PureComponent {
   getData = () => {
    const genres = ['React', 'Node', 'JavaScript', 'jQuery', 'Angular'];
    const summary = this.props.events.map((event) => {
      const eventSummary = event.summary;
      return { eventSummary };
    });

    const data = genres.map((genre) => {
      const name = genre;

      const value = summary.filter((summary) =>
      summary.eventSummary.indexOf(name) !== -1
      ).length;

      return { name, value };
    });

    return data.filter((data) => data.value >= 1);
  };

  render() {
    return (
      <>
        <h3 className="title-2">Events in each City</h3>
        <ResponsiveContainer height={400} width="90%">
          <ScatterChart className="chart2">
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="City" />
            <YAxis allowDecimals={false} type="number" dataKey="number" name="Number of Events" />
            <ZAxis range={[150, 600]} />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 5 }}/>
            <Scatter data={this.props.getData()} fill="#4285f4" />
          </ScatterChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default EventChart;
