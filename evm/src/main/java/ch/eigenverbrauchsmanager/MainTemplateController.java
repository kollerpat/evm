package ch.eigenverbrauchsmanager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/items")
public class MainTemplateController {	

    @RequestMapping(value="/webservice")
    public String getWebserviceTemplate() {
    	return "template/webservice";	
    }
    
    @RequestMapping(value="/statistic")
    public String getStatisticTemplate() {
    	return "template/statistic";	
    }
}

