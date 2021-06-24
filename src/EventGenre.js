import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#d61313', '#494949','#365c89', '#00C49F', '#FFBB28', '#fb5d04'];


 class EventGenre extends PureComponent {
   getData = () => {
    const genres = ['JavaScript', 'React', 'Node', 'jQuery', 'Angular', 'Mongo'];
    const summary = this.props.events.map((event) => {
      const eventSummary = event.summary;
      return { eventSummary };
    });

    const data = genres.map((genre) => {
      const name = genre;
      console.log(summary)
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
      <h3 className="title-2">Type of Events</h3>
      <ResponsiveContainer height={280} className="text-1">
        <PieChart>
          <Legend verticalAlign="top" height={50}/>
          <Pie data={this.getData()} cx="50%" cy="50%"
            labelLine={true} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%\u00A0`}
            outerRadius={70} fill="#8884d8" dataKey="value">
            {this.getData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </>
    );
  }
}

export default EventGenre;
