import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#d61313', '#494949', '#00C49F', '#365c89', '#FFBB28', '#FF8042',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {

  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x } y={y} fill="#fff" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {` ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

 class EventGenre extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

   getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const summary = this.props.events.map((event) => {
      const eventSummary = event.summary;
      return { eventSummary };
    });

    const data = genres.map((genre) => {
      const name = genre;

      const value = summary.filter((summary) =>
        summary.eventSummary.split(' ').includes(name)
      ).length;

      return { name, value };
    });

    return data.filter((data) => data.value >= 1);
  };

  render() {
    return (
      <ResponsiveContainer height={200}>
        <PieChart>
          <Pie data={this.getData()} cx="50%" cy="50%"
            labelLine={false} label={renderCustomizedLabel}
            outerRadius={80} fill="#8884d8" dataKey="value">
            {this.getData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default EventGenre;
