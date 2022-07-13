export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_CONTRIBUTION":
        return {
          ...state,
          contributions: [...state.contributions, action.payload],
        };
  
      case "EDIT_CONTRIBUTION":
        const updatedContribution = action.payload;
  
        const updatedContributions = state.contributions.map((contribution) => {
          if (contribution.id === updatedContribution.id) {
            return updatedContribution;
          }
          return contribution;
        });
  
        return {
          ...state,
          contributions: updatedContributions,
        };
  
      case "REMOVE_CONTRIBUTION":
        return {
          ...state,
          contributions: state.contributions.filter(
            (contribution) => contribution.id !== action.payload
          ),
        };

    
  
      default:
        return state;
    }
  };