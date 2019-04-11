import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { getCurrencies } from '../action/currenciesAction';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';
Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DnDCalendar = withDragAndDrop(Calendar);

class dashboardDatePage extends Component {
  state = {
    events: [
      {
        id: 0,
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
        title: 'Meeting',
      },
      {
        id: 1,
        start: new Date(moment().add(2, 'days')),
        end: new Date(moment().add(11, 'days')),
        title: 'Lunch',
      },
    ],
  };

  componentDidMount() {
    this.props.getCurrencies();
  }

  onEventResize = (type, { event, start, end }) => {
    const { events } = this.state;
    const idx = events.indexOf(event);
    this.setState(state => {
      state.events[idx].start = start;
      state.events[idx].end = end;
      return { events: state.events };
    });
  };
  onEventDrop = ({ event, start, end, droppedOnAllDaySlot }) => {
    const { events } = this.state;
    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });
  };

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    const { events } = this.state;
    let alreadyId = events[events.length - 1];
    let id = Number(alreadyId.id) + 1;
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            id: id,
            start,
            end,
            title,
          },
        ],
      });
  };

  render() {
    return (
      <div>
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: '100vh' }}
          onSelectSlot={this.handleSelect}
          selectable
          popup
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currenciesStore.currencies,
    loading: state.currenciesStore.loading,
  };
};
dashboardDatePage.propTypes = {
  getCurrencies: PropTypes.func,
};
export default connect(
  mapStateToProps,
  {
    getCurrencies,
  }
)(dashboardDatePage);
