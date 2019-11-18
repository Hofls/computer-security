package hofls.com.github.rest.profile;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

@Api(description = "User profile")
@RequestMapping("/profile")
@RestController
public class Profile {

    private String profileMessage = "On the vacation!";

    @ApiOperation(value = "Returns profile message", notes = "")
    @GetMapping(value="{id}")
    public String getHuman(@PathVariable(value = "id") Long id) {
        return profileMessage;
    }

    @ApiOperation(value = "Updates profile message", notes = "")
    @PutMapping(value="{id}")
    public String updateMessage(@PathVariable(value = "id") Long id, @RequestBody String message) {
        profileMessage = message;
        return profileMessage;
    }


}
